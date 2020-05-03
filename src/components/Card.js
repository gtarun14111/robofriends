import React, { Component} from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className = "tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
			<img src={`https://robohash.org/${id}?200x200`} alt="Not available" />
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;