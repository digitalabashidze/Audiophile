import { supabase, supabaseStorageUrl } from './supabase'

export interface LoginProps {
	email: string
	password: string
}

export async function login({ email, password }: LoginProps) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	})

	if (error) throw new Error(error.message)

	return data
}

export interface SignUpProps {
	email: string
	password: string
	username: string
}

export async function signUp({ email, password, username }: SignUpProps) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				username,
				full_name: '',
				phone_number: '',
				address: '',
				zip_code: '',
				city: '',
				country: '',
				avatar: '',
			},
		},
	})

	if (error) throw new Error(error.message)

	return data
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession()

	if (!session.session) return null

	const { data, error } = await supabase.auth.getUser()

	if (error) throw new Error(error.message)

	return data.user
}

export interface UpdateCurrentUserProps {
	username: string
	full_name: string
	phone_number: string
	address: string
	zip_code: string
	city: string
	country: string
	avatar: FileList | null
}

export async function updateCurrentUser({
	username,
	full_name,
	phone_number,
	address,
	zip_code,
	city,
	country,
	avatar,
}: UpdateCurrentUserProps) {
	const updateData: { data: Record<string, string> } = { data: {} }

	if (username) updateData.data.username = username
	if (full_name) updateData.data.full_name = full_name
	if (phone_number) updateData.data.phone_number = phone_number
	if (address) updateData.data.address = address
	if (zip_code) updateData.data.zip_code = zip_code
	if (city) updateData.data.city = city
	if (country) updateData.data.country = country

	const { data, error } = await supabase.auth.updateUser(updateData)

	if (error) throw new Error(error.message)
	if (!avatar) return data

	const fileName = `avatar-${data.user.id}-${Math.random()}`
	const { error: storageError } = await supabase.storage
		.from('avatars')
		.upload(fileName, avatar[0])

	if (storageError) throw new Error(storageError.message)

	const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
		data: {
			avatar: `${supabaseStorageUrl}/${fileName}`,
		},
	})

	if (error2) throw new Error(error2.message)

	return updatedUser
}

export async function logout() {
	const { error } = await supabase.auth.signOut()
	if (error) throw new Error(error.message)
}
