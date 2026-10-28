export const getContentType = () => ({ 
    'Content-type': 'application/json',
})

export const errorCatch = (error) => { 
    const message = error?.response?.data?.message

    return message
        ? typeof error.response.data.messege === 'object'
            ? message[0]
            : message
        : error.message
}