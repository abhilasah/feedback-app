import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadResponses, startLoadingResponses } from './store/actions';
import Main from './Main';

function mapStateToProps(state:any) {
    return {
      survey: state.survey
    }
  }
    
function mapDispatchToProps(dispatch:any) {
  return bindActionCreators({ startLoadingResponses, loadResponses },dispatch)
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);
export default App;
