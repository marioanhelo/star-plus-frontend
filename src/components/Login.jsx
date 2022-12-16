import React, { useState } from "react";
import { LOGIN } from "../graphql/Query";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isInValid, setisInValid] = useState("");
	const [login, { data, error }] = useLazyQuery(LOGIN, {
		variables: { email, password },
	});

	if (data) {
		console.log(data);
		//if(!data.login.length) return setisInValid(true)
	}

	return (
		<form
			onSubmit={async (e) => {
                e.preventDefault();
				await login().then(function (response) {
					console.log(response);
					var data = response.data.login;
					if (!data.length) {
						setisInValid("Invalid Credentials!!");
					} else {
						console.log("redirecting...");
						navigate("/home");
					}
                } ).catch( function ( err ) {
                    console.log( "Something went wrong!!", err)
                } )
			}}
		>
			<div className="flex flex-col p-4 text-center items-center justify-center h-screen bg-transparent justify-items-center rounded-lg sm:p-8">
			<div className="justify-items-center mx-auto pb-10 flex justify-center">
                        <img src="//cnbl-cdn.bamgrid.com/assets/e41020c93fec10692725897c2cffbc75a1c59a6855b2cb702d85b45c596a81e7/original" width="200" height="60" alt="Star+ logo"/>
                    </div>
				<div className="mb-6">
					<label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
						Inicia sesión con tu correo
					</label>
					<input
						type="email"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						id="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Correo electrónico"
						required
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
					Your password
					</label>
					<input
						type="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						id="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>
				<div className="mb-6">
					{isInValid && (
						<p className="mt-2 text-sm text-red-600 dark:text-red-500">
							<span className="font-medium">{isInValid}</span>
						</p>
					)}
				</div>
				<button
					type="submit"
					className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>
					Login
				</button>
			</div>
		</form>
	);
};

export default Login;