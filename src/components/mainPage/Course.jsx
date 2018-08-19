import React from 'react';
import {Link} from 'react-router-dom';

const course = ({courseData}) => {
	const {rating} = courseData;
	let ratingView = [];
	const checked = courseData.id % 2;

	for(let i = 0; i < Math.round(+rating); i++) {
		ratingView.push((<span key={i} className="fa fa-star checked"></span>));
	}
	for(let i = Math.round(+rating); i < 5; i++) {
		ratingView.push((<span key={i} className="fa fa-star"></span>));
	}
	return (
		
		<div className="course">
			<div className="thumbnail">
				<div className="wishlistButton">
					<i className={`fa fa-heart ${!checked ? "heart-was-not-checked" : ""}`}></i>
				</div>
				<img src={courseData.image} alt="Course" />
			</div>
			<Link to={`/courses/${courseData.id}`}>
				<div className="course-content">
					<div className="coursePrice">
						<p>${courseData.price}</p>
					</div>
					<h1>{courseData.title}</h1>
					<h2>{courseData.author}</h2>
					<p className="description">{courseData.description}</p>
					<div className="course-meta">
						<span className="students"><i className="fa fa-users"></i> {courseData.students}</span>
						<span className="rating">{ratingView.map(star => star)} {courseData.rating}</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default course;