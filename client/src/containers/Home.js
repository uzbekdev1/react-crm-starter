import {connect} from 'react-redux';

import MainPage from '../components/MainPage';

const mapStateToProps=(state)=>{
	return {
		submitted:state.form.submitted,
		name:state.form.name,
		email:state.form.email,
		theme:state.form.theme,
		message:state.form.message
	}
}

const Home = connect(mapStateToProps)(MainPage);

export default Home;