// export default AdminUser;
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Requests from '../../api/ApiList';
import phonepe from '../../images/phonepe-logo-icon.png';
import gpay from '../../images/google-pay-icon.png';
import paytm from '../../images/paytm-icon.png';
import amazonpay from '../../images/amazon-pay-icon.png';
import Events from '../events/Eventjson';

const AdminUser = ({ props }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const [details, setDetails] = useState([]);
	const [cart, setCart] = useState([]);
	const [amount, setAmount] = useState(0);
	const [username, setUsername] = useState('');
	const [upiId, setUpiId] = useState('');
	const [isQr, setIsQr] = useState(false);
	const [payMethod, setPayMethod] = useState(0);
	const [pass, setPass] = useState(false);
	const passAmt = 100;
	const [isPassChecked, setIsPassChecked] = useState(true);
	const payList = [
		'UTR',
		'UPI transaction ID',
		'UPI Ref ID',
		'Bank Reference Id',
	];

	function onlyDigits(s) {
		for (let i = s.length - 1; i >= 0; i--) {
			const d = s.charCodeAt(i);
			if (d < 48 || d > 57) return false;
		}
		return true;
	}

	useEffect(() => {
		const fetchEvents = () => {
			setDetails(Events);
		};
		fetchEvents();
	}, []);

	const handleCheckboxChange = (e) => {
		const { checked, id, value } = e.target;
		let temp = [...cart];
		if (!checked) {
			temp = temp.filter((data) => data.id !== id);
		} else {
			temp.push({ id, amt: Number(value) });
		}
		let totalAmount = 0;
		temp.forEach((data) => (totalAmount += data.amt));
		setAmount(totalAmount);
		setCart(temp);
		setIsQr(true);
		setUpiId('');
		console.log(temp);
	};

	const handlePassCheckboxChange = (e) => {
		const checked = e.target.checked;
		if (checked) {
			setCart([]);
			setAmount(passAmt);
			setIsQr(true);
			setUpiId('');
		} else {
			setAmount(0);
			setCart([]);
			setIsQr(false);
		}
	};

	const handlePayment = async () => {
		try {
			// Validation
			if (username === '') {
				throw new Error('Username is empty');
			}

			if (!onlyDigits(upiId)) {
				throw new Error('Enter Only Numeric digits!');
			}

			if (upiId === '' || upiId.length < 10) {
				throw new Error('Enter Valid id');
			}

			// Payment processing
			const requestData = pass
				? { amount: passAmt, username, transaction_id: upiId }
				: {
						username,
						transaction_id: upiId,
						event_list: cart.map((data) => data.id),
						amount: cart.reduce((total, data) => total + data.amt, 0),
				  };

			const id = '';
			const response = pass
				? await Requests.adminPass(requestData)
				: await Requests.adminOrder(requestData);
			toast.dismiss();
			toast.success(pass ? 'Pass Booked' : 'Successfully generated ticket');

			if (!pass) {
				navigate('/admin');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<div className="adminUser">
			<div className="card">
				<div className="row">
					<div className="col-md-7 cart">
						<div className="title">
							<div className="row">
								<div className="col">
									<h4>
										<b>Events</b>
									</h4>
								</div>
							</div>
						</div>
						<table style={{ width: '100%' }}>
							<tbody className="text-lg">
								{/* Checkbox for Event Pass */}
								<tr key={100}>
									<td>
										<input
											type="checkbox"
											onChange={handlePassCheckboxChange}
											id="fd"
											name="Event Pass"
											value={passAmt}
											checked={cart.length === 0 && amount === passAmt}
										/>
										{/* <label htmlFor="fd">Event Pass</label> */}
									</td>

									<td style={{ paddingLeft: '15px' }}>
										<label htmlFor={100}>{passAmt}</label>
									</td>
								</tr>
								{/* Checkboxes for other events */}
								{!isPassChecked &&
									details.map((data) => (
										<tr key={data.id}>
											<td>
												<input
													type="checkbox"
													onChange={handleCheckboxChange}
													id={`${data.id}`}
													name={data.heading}
													value={data.amount}
													checked={cart.find((item) => item.id === data.id)}
												/>
												<label htmlFor={`${data.id}`}>{data.heading}</label>
											</td>
											{/* <td className="p-[15px]">
												<label htmlFor={data.id}>{data.amount}</label>
											</td> */}
										</tr>
									))}
								{/* Total items and total amount */}
								<tr>
									<hr className="w-[120%] h-[2px] border-[5px] text-white bg-white" />
								</tr>
								<tr>
									<td>Items</td>
									<td className="p-[15px]">{cart.length}</td>
								</tr>
								<tr>
									<td>Total Amount</td>
									<td className="p-[15px]">{amount}</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Payment section */}
					<div className="col-md-5 summary">
						<div>
							<h4>
								<b>Payment</b>
							</h4>
						</div>
						<hr />
						<div className="pay-links">
							<div
								id="payment-qr-code"
								className={`"payment-qr-code
								${isQr ? 'visible' : 'h-[0] w-[0]'}
								}`}></div>
							<p className="payment-link">Select Method</p>
							<div>{/* Payment method icons */}</div>
							<div className="pt-[5%]">
								<p>Enter {payList[payMethod]}</p>
								<input
									id="upiId"
									name="upiId"
									value={upiId}
									onChange={(e) => setUpiId(e.target.value)}
									placeholder={`Enter ${payList[payMethod]}`}
									required
								/>
							</div>
							<div>
								Enter Username Of Person:
								<input
									id="username"
									name="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									placeholder="Enter Username Of Person:"
									required
								/>
							</div>
							<button className="btn" onClick={handlePayment}>
								Confirm Payment
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminUser;
