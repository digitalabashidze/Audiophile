import { useState, forwardRef, useImperativeHandle } from 'react'
import { FormProvider, useForm, Controller } from 'react-hook-form'
import { useUser } from '../../hooks/useAuth'
import { useCreateOrder } from '../../hooks/useOrders'
import Input from '../Input/Input'
import Spinner from '../Spinner/Spinner'
import Icon from '@images/checkout/icon-cash-on-delivery.svg'
import styles from './CheckoutForm.module.scss'

interface CartItem {
	id: number
	name: string
	price: number
	quantity: number
	image: string
}

interface CheckoutFormProps {
	cartItems: CartItem[]
	clearCart: () => void
	onPaymentMethodChange: (method: string) => void
	onSuccessSubmit: (success: boolean) => void
}

interface CheckoutFormValues {
	name: string
	email: string
	phoneNumber: string
	address: string
	zipCode: string
	city: string
	country: string
	paymentMethod: string
	eMoneyNumber?: string
	eMoneyPin?: string
}

const CheckoutForm = forwardRef(
	(
		{ cartItems, onPaymentMethodChange, onSuccessSubmit }: CheckoutFormProps,
		ref
	) => {
		const { isLoading, user: userProfile } = useUser()
		const { createOrder } = useCreateOrder()

		const methods = useForm<CheckoutFormValues>({
			defaultValues: {
				name: userProfile?.user_metadata.full_name || '',
				email: userProfile?.email || '',
				phoneNumber: userProfile?.user_metadata.phone_number || '',
				address: userProfile?.user_metadata.address || '',
				zipCode: userProfile?.user_metadata.zip_code || '',
				city: userProfile?.user_metadata.city || '',
				country: userProfile?.user_metadata.country || '',
				paymentMethod: 'eMoney',
				eMoneyNumber: '',
				eMoneyPin: '',
			},
		})

		const onSubmit = (data: CheckoutFormValues) => {
			const orderData = {
				user_id: userProfile?.id || '',
				name: data.name,
				email: data.email,
				phone_number: data.phoneNumber,
				address: data.address,
				zip_code: data.zipCode,
				city: data.city,
				country: data.country,
				payment_method: data.paymentMethod,
				e_money_number: data.eMoneyNumber,
				e_money_pin: data.eMoneyPin,
				cart_items: cartItems,
			}

			try {
				createOrder(orderData)
				methods.reset()
				onSuccessSubmit(true)
			} catch (error) {
				console.error('Form submission failed:', error)
				onSuccessSubmit(false)
			}
		}

		const [paymentMethod, setPaymentMethod] = useState('eMoney')

		useImperativeHandle(ref, () => ({
			submit: methods.handleSubmit(onSubmit),
		}))

		const handlePaymentMethodChange = (method: string) => {
			setPaymentMethod(method)
			onPaymentMethodChange(method)
		}

		if (isLoading) return <Spinner />

		return (
			<div className={styles['checkout-form']}>
				<h3>CHECKOUT</h3>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<legend className={styles['title']}>Billing Details</legend>
						<div className={styles['form-group']}>
							<div className={styles['form-row']}>
								<Input
									name='name'
									label='Name'
									placeholder='Enter your name'
									rules={{ required: 'name is required' }}
								/>
								<Input
									name='email'
									type='email'
									label='Email Address'
									placeholder='Enter your email'
									rules={{
										required: 'Email is required',
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: 'Wrong format',
										},
									}}
								/>
							</div>
							<div className={`${styles['form-row']} ${styles['w-50']}`}>
								<Input
									name='phoneNumber'
									label='Phone Number'
									placeholder='Enter your phone number'
									type='tel'
									rules={{
										required: 'Phone number is required',
										pattern: {
											value: /^\+?[1-9]\d{1,14}$/,
											message: 'Invalid phone number format',
										},
									}}
								/>
							</div>
						</div>
						<legend className={styles['title']}>shipping info</legend>
						<div className={styles['form-group']}>
							<div className={styles['form-row']}>
								<Input
									name='address'
									label='Address'
									placeholder='Enter your address'
									rules={{ required: 'Address is required' }}
								/>
							</div>
							<div className={styles['form-row']}>
								<Input
									name='zipCode'
									label='Zip Code'
									placeholder='Enter your zip code'
									rules={{
										required: 'Zip code is required',
										pattern: {
											value: /^[0-9]{4}$/,
											message: 'Invalid zip code format',
										},
									}}
								/>
								<Input
									name='city'
									label='City'
									placeholder='Enter your city'
									rules={{ required: 'City is required' }}
								/>
							</div>
							<div className={`${styles['form-row']} ${styles['w-50']}`}>
								<Input
									name='country'
									label='Country'
									placeholder='Enter your country'
									rules={{ required: 'Country is required' }}
								/>
							</div>
						</div>
						<legend className={styles['title']}>payment details</legend>
						<div className={styles['form-row']}>
							<span>Payment Method</span>
							<div className={styles['radio-group']}>
								<Controller
									name='paymentMethod'
									control={methods.control}
									render={({ field }) => (
										<>
											<label className={styles.label}>
												<input
													className={styles['radio-input']}
													type='radio'
													value='eMoney'
													checked={field.value === 'eMoney'}
													onChange={e => {
														field.onChange(e)
														handlePaymentMethodChange(e.target.value)
													}}
												/>
												<span className={styles['radio-custom']}></span>
												e-Money
											</label>
											<label>
												<input
													className={styles['radio-input']}
													type='radio'
													value='cashOnDelivery'
													checked={field.value === 'cashOnDelivery'}
													onChange={e => {
														field.onChange(e)
														handlePaymentMethodChange(e.target.value)
													}}
												/>
												<span className={styles['radio-custom']}></span>
												Cash on Delivery
											</label>
										</>
									)}
								/>
							</div>
						</div>
						{paymentMethod === 'cashOnDelivery' && (
							<div className={styles['payment-info']}>
								<img src={Icon} alt='Icon' />
								<p>
									The ‘Cash on Delivery’ option enables you to pay in cash when
									our delivery courier arrives at your residence. Just make sure
									your address is correct so that your order will not be
									cancelled.
								</p>
							</div>
						)}
						{paymentMethod === 'eMoney' && (
							<>
								<div className={`${styles['form-group']} ${styles['mb-0']}`}>
									<div className={styles['form-row']}>
										<Input
											checked={paymentMethod === 'eMoney'}
											name='eMoneyNumber'
											label='e-Money Number'
											placeholder='Enter your e-Money number'
											rules={{
												required: 'number is required',
												pattern: {
													value: /^[0-9]{3,10}$/,
													message: 'Wrong format',
												},
											}}
										/>
										<Input
											name='eMoneyPin'
											label='e-Money PIN'
											placeholder='Enter your e-Money PIN'
											rules={{
												required: 'PIN is required',
												pattern: {
													value: /^[0-9]{3,10}$/,
													message: 'Wrong format',
												},
											}}
										/>
									</div>
								</div>
							</>
						)}
					</form>
				</FormProvider>
			</div>
		)
	}
)

export default CheckoutForm
