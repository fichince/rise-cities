import React from "react";
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageUpload from '../editing/ImageUpload';
import {uploadFile as uploadImage} from "../../aws/operations";


const emptyPartner = {
  name: '',
  image: {},
  url: '',
  order: 0,
}

class PartnerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPartner: props.partner || emptyPartner,
      errors: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.partner !== this.props.partner && !Boolean(this.props.partner)) {
      this.setState({ newPartner: emptyPartner })
    }

    if (prevProps.partner !== this.props.partner && this.props.partner?.id) {
      this.setState({ newPartner: this.props.partner })
    }
  }

  handleChange = key => event => {
    this.setState({ errors: {} })
    const value = event.currentTarget.value
    this.setState({ newPartner: {...this.state.newPartner, [key]: value} })
  }

  handleImageChange = key => image => {
    this.setState({ newPartner: {...this.state.newPartner, [key]: { imageSrc: image.imageSrc } } })
  }

  handleDescChange = key => desc => {
    this.setState({ newPartner: {...this.state.newPartner, [key]: desc.text} })
  }

  handleSaveProfile = () => {
    const { newPartner } = this.state;
    const id = newPartner.id ? newPartner.id : `partner-${Date.now()}`

    const data = {
      ...newPartner,
      id
    }

    this.props.onSaveItem(id, data)
    this.props.closeModal()
    this.setState({ newPartner: emptyPartner })
  }

  handleCancel = () => {
    this.props.closeModal()
    this.setState({ newPartner: emptyPartner })
  }

  handleDeletePartner = () => {
    this.props.onDeleteItem(this.state.newPartner.id)
    this.props.closeModal()
    this.setState({ newPartner: emptyPartner })
  }

  render() {
    const { handleDeletePartner, handleSaveProfile, handleChange, handleImageChange, handleCancel } = this;
    const { showModal, closeModal } = this.props;
    const {
      name,
      image,
      id,
      url,
      order,
    } = this.state.newPartner;

    // const { errors } = this.state;

    return (
      <Dialog open={showModal} onClose={closeModal} aria-labelledby="form-dialog-title" scroll="body">
        <DialogTitle id="form-dialog-title">{id ? 'Edit Partner' : 'Create a Profile' }</DialogTitle>
        <DialogContent>
          <ImageUpload
            content={image}
            onContentChange={handleImageChange('image')}
            uploadImage={uploadImage}
            label="Add a logo"
            round
          />
          <TextField
            value={name || ''}
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={handleChange('name')}
            variant="outlined"
            required
          />
          <TextField
            value={url || ''}
            margin="dense"
            id="url"
            label="Website URL"
            type="url"
            fullWidth
            onChange={handleChange('url')}
            variant="outlined"
          />
          <TextField
            value={order || 0}
            type="number"
            id="order"
            margin="dense"
            label="Order"
            fullWidth
            onChange={handleChange('order')}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <div className="pr-3 pl-3 pb-2 width-100">
            <Grid container justify="space-between">
              <Grid item>
                {
                  id &&
                  <Button onClick={handleDeletePartner} color="secondary">
                    Delete
                  </Button>
                }
              </Grid>
              <Grid item>
                <Button
                  onClick={handleCancel}
                  color="default"
                  variant="text"
                  style={{borderRadius:0, marginRight: '8px'}}
                  disableElevation>
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveProfile}
                  color="primary"
                  variant="contained"
                  style={{borderRadius:0}}
                  disabled={!name}
                  disableElevation>
                  Save
                </Button>
              </Grid>
            </Grid>
          </div>
        </DialogActions>
      </Dialog>
    );
  }

}

PartnerModal.defaultProps = {
  onSaveItem: () => console.log("uh oh you're missing onSaveItem"),
  partner: emptyPartner,
  showModal: false
}

export default PartnerModal

