import { useState } from 'react';

function ExperienceForm(props) {
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
		company: '',
		position: '',
		experience: '',
        workStart: '',
        workEnd: '',
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
				<div id="practical-experience">
					<ExperienceForm
						text="text"
						name="company"
						placeholder="Company Name: "
						value={formData.company}
						onChange={handleChange}
					/>
					<ExperienceForm
						text="text"
						name="position"
						placeholder="Position Title: "
						value={formData.position}
						onChange={handleChange}
					/>
					<ExperienceForm
						text="text"
						name="description"
						placeholder="Description: "
						value={formData.description}
						onChange={handleChange}
					/>
					<ExperienceForm
						text="date"
						name="workStart"
						placeholder="Start Date: "
						value={formData.workStart}
						onChange={handleChange}
					/>
					<ExperienceForm
						text="date"
						name="workEnd"
						placeholder="End Date: "
						value={formData.workStart}
						onChange={handleChange}
					/>
					<button>Submit</button>
				</div>
			</form>
			{submitted && (
				<div id="submitted-data">
					<p>Company: {formData.company}</p>
					<p>Position: {formData.position}</p>
					<p>DescripDescriptiontion: {formData.description}</p>
                    <p>Start Date: {formData.workStart}</p>
					<p>End Date: {formData.workEnd}</p>
				</div>
			)}
		</>
	);
}
