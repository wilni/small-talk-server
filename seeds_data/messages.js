module.exports = [
    {
        message_id: "1",
        sender_email: "wilnitavarez@gmail.com",
        recipient_email: 'raquel@aim.com',
        content: "first text",
        sent_at: Date.now().toString(),
        connection_id: '1'
    },
    {
        message_id: '2',
        sender_email: "wilnitavarez@gmail.com",
        recipient_email: "rocky@aim.com",
        connection_id: "2",
        content: "HI!", 
        sent_at: (Date.now() + 1).toString(),
        connection_id: '2'
    }
    
]