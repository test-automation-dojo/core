import React from 'react';
import { connect } from 'react-redux';

import EditBranchModal from './EditBranchModal';
import AddBranchModal from './AddBranchModal';
import DeleteButton from '../../common/DeleteButton';
import AddButton from '../../common/AddButton';
import EditButton from '../../common/EditButton';

import { modalOpened } from '../../../actions/modalActions';
import { getSelectedBranch } from '../../../reducers/branchReducers';
import { branchRemoveRequested, branchCreateRequested, branchUpdateRequested } from '../../../actions/branchActions';

const SelectedBranchActions = ({ onModalOpen, onCreate, onUpdate, onDelete, branch }) => (
  <span className="actions">
    <AddButton
      onClick={() => onModalOpen('add-branch')}
      title="New branch"
    />
    <AddBranchModal onSave={onCreate} />
    <EditButton
      onClick={() => onModalOpen('edit-branch')}
      title="Edit branch"
    />
    <EditBranchModal onSave={onUpdate} branch={branch} />
    <DeleteButton
      confirmMessage="Are you sure you want to delete the current branch?"
      title="Delete branch"
      onDelete={() => onDelete(branch)}
    />
  </span>
);

const mapStateToProps = state => ({
  branch: getSelectedBranch(state),
});

const mapDispatchToProps = dispatch => ({
  onCreate: branch => dispatch(branchCreateRequested(branch)),
  onDelete: branch => dispatch(branchRemoveRequested(branch)),
  onUpdate: branch => dispatch(branchUpdateRequested(branch)),
  onModalOpen: source => dispatch(modalOpened(source)),
});

SelectedBranchActions.propTypes = {
  branch: React.PropTypes.object,
  onCreate: React.PropTypes.func,
  onUpdate: React.PropTypes.func,
  onDelete: React.PropTypes.func,
  onModalOpen: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedBranchActions);
