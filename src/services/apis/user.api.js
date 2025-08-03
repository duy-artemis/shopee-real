
import { instance } from '.'

// interface BodyUpdateProfile extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'email'> {
//   password?: string
//   newPassword?: string
// }

const userApi = {
  // getProfile() {
  //   return http.get<SuccessResponse<User>>('me')
  // },
  // updateProfile(body: BodyUpdateProfile) {
  //   return http.put<SuccessResponse<User>>('user', body)
  // },
  // uploadAvatar(body: FormData) {
  //   return http.post<SuccessResponse<string>>('user/upload-avatar', body, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  // }
  getProfile() {
    return instance.get('me');
  },
  updateProfile(newProfile) {
    return instance.put('user', newProfile);
  },
  uploadAvatar (formData) {
    return instance.post('user/upload-avatar',formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default userApi
