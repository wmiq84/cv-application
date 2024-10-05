// import './Form.css'

function Form(props) {
	return (
		<label>
			{props.placeholder}
			<input type={props.text} name={props.name} />
		</label>
	);
}

export default function CreateForm() {
    const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Form submitted.');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div id="general-info">
				<Form text="text" name="name" placeholder="Name: " />
				<Form text="email" name="email" placeholder="Email: " />
				<Form text="tel" name="phone" placeholder="Phone: " />
			</div>
			<div id="education">
				<Form text="text" name="school" placeholder="School: " />
				<Form text="text" name="study" placeholder="Title Of Study: " />
				<Form text="date" name="school-start-date" placeholder="Start Date: " />
				<Form text="date" name="school-end-date" placeholder="End Date: " />
			</div>
			<div id="practical-experience">
				<Form text="text" name="company" placeholder="Company Name: " />
				<Form text="text" name="position" placeholder="Position Title: " />
				<Form text="text" name="description" placeholder="Description: " />
				<Form text="date" name="work-start-date" placeholder="Start Date: " />
				<Form text="date" name="work-end-date" placeholder="End Date: " />
			</div>
            <button type="submit">Submit</button>
		</form>
	);
}
