import React, {Component} from 'react';
import Spinner from '../components/UI/spinner/Spinner';
import CoursesList from '../components/mainPage/CoursesList';

class MainPage extends Component {
	render() {
		return (
			<div className="container">
				<CoursesList key="a" title="You may like:" />
				<CoursesList key="b" title="Recommended by resent views" />
				<CoursesList key="c" title="Recemmended by your preferences" />
			</div>
		);
	}
}

export default MainPage;