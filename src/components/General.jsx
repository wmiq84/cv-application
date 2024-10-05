import { useState } from 'react';

function GeneralForm(props) {
	return (
		<label>
			{props.placeholder}
			<input
				type={props.text}
				name={props.name}
				value={props.value}
				onChange={props.onChange}
			/>
		</label>
	);
}

export default function CreateForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
			// email: event.target.value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Form submitted.');
		setSubmitted(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div id="general-info">
					<GeneralForm
						text="text"
						name="name"
						placeholder="Name: "
						value={formData.name}
						onChange={handleChange}
					/>
					<GeneralForm
						text="email"
						name="email"
						placeholder="Email: "
						value={formData.email}
						onChange={handleChange}
					/>
					<GeneralForm
						text="tel"
						name="phone"
						placeholder="Phone: "
						value={formData.phone}
						onChange={handleChange}
					/>
					<button>Submit</button>
				</div>
			</form>
			{submitted && (
				<div id="submitted-data">
					<p>Name: {formData.name}</p>
					<p>Email: {formData.email}</p>
					<p>Phone: {formData.phone}</p>
				</div>
			)}
		</>
	);
}
