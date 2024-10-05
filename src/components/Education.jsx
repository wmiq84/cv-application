import { useState } from 'react';

function EducationForm(props) {
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
		school: '',
		study: '',
		schoolStart: '',
        schoolEnd: '',
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
				<div id="education">
					<EducationForm
						text="text"
						name="school"
						placeholder="School: "
						value={formData.school}
                        onChange={handleChange}
					/>
					<EducationForm
						text="text"
						name="study"
						placeholder="Title Of Study: "
						value={formData.study}
                        onChange={handleChange}
					/>
					<EducationForm
						text="date"
						name="schoolStart"
						placeholder="Start Date: "
						value={formData.schoolStart}
                        onChange={handleChange}
					/>
					<EducationForm
						text="date"
						name="schoolEnd"
						placeholder="End Date: "
                        value={formData.schoolEnd}
                        onChange={handleChange}
					/>
					<button>Submit</button>
				</div>
			</form>
			{submitted && (
				<div id="submitted-data">
					<p>Name: {formData.school}</p>
					<p>Email: {formData.study}</p>
					<p>School Start Date: {formData.schoolStart}</p>
					<p>School End Date: {formData.schoolEnd}</p>
				</div>
			)}
		</>
	);
}
