import { useEffect, useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useLogout, useUpdateUser, useUser } from '../../hooks/useAuth'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'
import Empty from '../Empty/Empty'
import Avatar from '@images/default-user.jpg'
import styles from './Profile.module.scss'

interface ProfileFormInputs {
	username: string
	full_name: string
	phone_number: string
	address: string
	zip_code: string
	city: string
	country: string
	avatar: FileList | null
}

const Profile = () => {
	const [editMode, setEditMode] = useState(false)
	const { isLoading, user: userProfile } = useUser()
	const { updateUser, isLoading: isUpdating } = useUpdateUser()
	const { logout, isLoading: isLoginout } = useLogout()

	const methods = useForm<ProfileFormInputs>({
		defaultValues: {
			username: userProfile?.user_metadata.username || '',
			full_name: userProfile?.user_metadata.full_name || '',
			phone_number: userProfile?.user_metadata.phone_number || '',
			address: userProfile?.user_metadata.address || '',
			zip_code: userProfile?.user_metadata.zip_code || '',
			city: userProfile?.user_metadata.city || '',
			country: userProfile?.user_metadata.country || '',
			avatar: null,
		},
	})

	const { handleSubmit, reset, setValue } = methods

	useEffect(() => {
		if (userProfile) {
			reset({
				username: userProfile.user_metadata.username,
				full_name: userProfile.user_metadata.full_name,
				phone_number: userProfile.user_metadata.phone_number,
				address: userProfile.user_metadata.address,
				zip_code: userProfile.user_metadata.zip_code,
				city: userProfile.user_metadata.city,
				country: userProfile.user_metadata.country,
				avatar: null,
			})
		}
	}, [userProfile, reset])

	const onSubmit: SubmitHandler<ProfileFormInputs> = data => {
		if (userProfile) {
			updateUser({ ...data })
			setEditMode(false)
		}
	}

	if (isLoading) {
		return <Spinner />
	}

	if (!userProfile) {
		return <Empty />
	}

	return (
		<div className={styles['profile-form']}>
			<div className={styles['wrapper']}>
				<h4>Profile</h4>
				{editMode ? (
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Input
								name='username'
								label='Username'
								type='text'
								placeholder='Enter your username'
								rules={{ required: 'Username is required' }}
							/>
							<Input
								name='full_name'
								label='Full Name'
								type='text'
								placeholder='Enter your full name'
								rules={{ required: 'Full Name is required' }}
							/>
							<Input
								name='phone_number'
								label='Phone Number'
								type='tel'
								placeholder='Enter your phone number'
								rules={{
									required: 'Phone Number is required',
									pattern: {
										value: /^\d{10}$/,
										message: 'Invalid phone number',
									},
								}}
							/>
							<Input
								name='address'
								label='Address'
								type='text'
								placeholder='Enter your address'
								rules={{ required: 'Address is required' }}
							/>
							<Input
								name='zip_code'
								label='Zip Code'
								type='text'
								placeholder='Enter your zip code'
								rules={{
									required: 'Zip Code is required',
									pattern: {
										value: /^\d{4}$/,
										message: 'Invalid zip code',
									},
								}}
							/>
							<Input
								name='city'
								label='City'
								type='text'
								placeholder='Enter your city'
								rules={{ required: 'City is required' }}
							/>
							<Input
								name='country'
								label='Country'
								type='text'
								placeholder='Enter your country'
								rules={{ required: 'Country is required' }}
							/>
							<div className={styles['avatar-input']}>
								<label htmlFor='avatar' className={styles['avatar-label']}>
									Avatar
								</label>
								<input
									id='avatar'
									type='file'
									onChange={e => setValue('avatar', e.target.files)}
									accept='image/*'
									className={styles['avatar-file']}
								/>
								<button
									type='button'
									className={styles['avatar-button']}
									onClick={() => document.getElementById('avatar')?.click()}
								>
									Upload Avatar
								</button>
							</div>

							<div className={styles['form-btns']}>
								<Button type='submit' disabled={isUpdating}>
									{isUpdating ? 'Updating...' : 'Update'}
								</Button>
								<Button variant='dark' onClick={() => setEditMode(false)}>
									Cancel
								</Button>
							</div>
						</form>
					</FormProvider>
				) : (
					<div className={styles['profile']}>
						<div className={styles['profile-image']}>
							<img
								src={userProfile.user_metadata.avatar || Avatar}
								alt='avatar'
							/>
						</div>
						<p>
							<strong>Username:</strong> {userProfile.user_metadata.username}
						</p>

						<p>
							<strong>Full Name:</strong> {userProfile.user_metadata.full_name}
						</p>
						<p>
							<strong>Phone Number:</strong>
							{userProfile.user_metadata.phone_number}
						</p>
						<p>
							<strong>Address:</strong> {userProfile.user_metadata.address}
						</p>
						<p>
							<strong>Zip Code:</strong> {userProfile.user_metadata.zip_code}
						</p>
						<p>
							<strong>City:</strong> {userProfile.user_metadata.city}
						</p>
						<p>
							<strong>Country:</strong> {userProfile.user_metadata.country}
						</p>
						<div className={styles['profile-btns']}>
							<Button onClick={() => setEditMode(true)}>Edit Profile</Button>
							<Button onClick={logout} variant='dark'>
								{isLoginout ? 'Login out...' : 'Log out'}
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Profile
