function Label(props) {
	return (
		<label>
			{props.placeholder}
			<input type={props.text} name={props.name} />
		</label>
	);
}

export default function GeneralInfo() {
	return (
		<div>
			<Label text="text" name="name" placeholder="Name: " />
			<Label text="email" name="email" placeholder="Email: " />
			<Label text="tel" name="phone" placeholder="Phone: " />
		</div>
	);
}
