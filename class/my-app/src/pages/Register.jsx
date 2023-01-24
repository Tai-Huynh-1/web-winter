import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../components/Button";

const phoneRegex = /^[(]{1}[0-9]{3}[)]{1}\s[0-9]{3}-[0-9]{4}$/;

function formatPhoneNumber(value) {
	if (!value) return value;
	// clean input for any non-digit value
	const phoneNumber = value.replace(/[^\d]/g, "");
	const phoneNumberLength = phoneNumber.length;
	if (phoneNumberLength < 4) return phoneNumber;
	if (phoneNumberLength < 7) {
		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
	}

	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

const schema = yup.object({
	email: yup.string().max(50, "Maximum of 50 characters allowed.").email().required(),
	password: yup.string().min(8, "Must be at least 8 characters long").required(),
	phone: yup.string().matches(phoneRegex, "Phone must be in the format (XXX) XXX-XXXX").required(),
	terms: yup.boolean().required().oneOf([true], "Please accept the Terms and Conditions."),
});

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		trigger,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
			password: "",
			phone: "",
			terms: false,
		},
	});

	const onSubmit = (data) => {
		console.log("data", data);
	};

	// console.log("email input", watch("email"));

	console.log("errors", errors);

	return (
		<PageContainer pageTitle="Register">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label id="email">Email: </label>
					<input
						type="email"
						id="email"
						{...register("email")}
						// onChange={(e) => {
						// 	trigger("email");
						// }}
					/>
					{errors?.email && <p className="text-red-500">{errors.email?.message}</p>}
				</div>

				<div>
					<label id="password">Password: </label>
					<input type="password" id="password" {...register("password")} />
					{errors?.password && <p className="text-red-500">{errors.password?.message}</p>}
				</div>

				<div>
					<label id="phone">Phone: </label>
					<input
						type="text"
						id="phone"
						{...register("phone")}
						onChange={(e) => {
							setValue("phone", formatPhoneNumber(e.target.value));
							trigger("phone", { shouldFocus: true });
						}}
					/>
					{errors?.phone && <p className="text-red-500">{errors.phone?.message}</p>}
				</div>

				<div>
					<label id="terms">
						<input type="checkbox" id="terms" {...register("terms")} />I agree to the <Link>Terms & Conditions</Link>.
					</label>
					{errors?.terms && <p className="text-red-500">{errors.terms?.message}</p>}
				</div>

				<Button type="submit" disabled={watch("terms") ? false : true}>
					Submit
				</Button>
			</form>
		</PageContainer>
	);
};

export default Register;
