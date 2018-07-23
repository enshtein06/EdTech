import React, {Component} from 'react';
import Course from './Course';

const courses = [
	{
		image: "https://udemy-images.udemy.com/course/240x135/705264_caa9_3.jpg",
		title: "Modern React with Redux",
		author: "Stephen Grider",
		rating: "4.6",
		price: "10.99",
		description: "New description of this course. Description",
		students: "32 269"
	}, {
		image: "https://udemy-images.udemy.com/course/240x135/1286908_1773_4.jpg",
		title: "React course",
		author: "Andrew Mead",
		rating: "4.7",
		price: "9.99",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		students: "4128"
	}, {
		image: "https://udemy-images.udemy.com/course/240x135/1227322_bdcd.jpg",
		title: "React vs Angular vs Vue.js",
		author: "Gary Simon",
		rating: "4.3",
		price: "9.99",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		students: "4129"
	}, {
		image: "https://udemy-images.udemy.com/course/240x135/1652608_662b_4.jpg",
		title: "Angular, React & Node Guide",
		author: "Filip Jerga",
		rating: "4.8",
		price: "19.99",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		students: "48"
	}, {
		image: "https://udemy-images.udemy.com/course/240x135/1299714_9faf_2.jpg",
		title: "AI in Game development",
		author: "Aarthi Elumalai",
		rating: "5",
		price: "12.99",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		students: "7"
	}
]

class CoursesList extends Component {
	render() {
		return (
			<div>
				<div className="coursesList__header">
					<h2>{this.props.title}</h2>
					<span>View All</span>
				</div>
				<div className="coursesList">
					{courses.map(course => (<Course key={course.students} courseData={course} />))}
				</div>
			</div>
		)
	}
}

export default CoursesList;