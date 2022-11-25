export type UserType = {
    latitude: number
    longitude: number
    online: boolean
    profile: {
        age: number,
        name: string,
        photoUrl: string
        preferenceGender: string
        uid: string
        userGender: string
        unlikes: string[]
        unlikedBy: string[]
        likes: string[]
        likedBy: string[]
        chatsWith: {
            [key:string]:{
                chatId:string
            } 
        }
    }
}