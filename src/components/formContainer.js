import {connect} from 'redux';
import ContactForm from './ContactForm';
import { getFormView, getFormEdit, getHasChanged } from "../store/form/selectors";
import { setupForm, saveForm } from '../../store/form/thunk';
import { addChange } from '../../store/form/actions';


const mapStateToProps = state => ({
    formView: getFormView(state),
    formEdit: getFormEdit(state),
    hasChanged: getHasChanged(state),
});

const mapDispatchToProps = dispatch => ({
    addChange: (fieldName, fieldValue) => dispatch (addChange (fieldName, fieldValue)),
    discardChanges: () => dispatch (setupForm()),
    saveChanges: () => dispatch (saveForm()),
    setUpEditableForm: () => dispatch(setupForm()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);