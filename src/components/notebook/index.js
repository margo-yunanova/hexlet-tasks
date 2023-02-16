import Add from './add.jsx';
import Remove from './remove.jsx';
import Rename from './rename.jsx';

const modals = {
  adding: Add,
  removing: Remove,
  renaming: Rename,
};

export default (modalName) => modals[modalName];