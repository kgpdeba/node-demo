import todoSchema from "../models/todoSchema.js"

export const createTodo = async (req, res) => {
    try {
        const { title } = req.body
        const data = await todoSchema.create({ title })
        if (data) {
            return res.status(201).json({
                success: true,
                message: "Todo created successfully",
                data
            })
        }

    } catch (error) {
        return res.status(400).json({
            success: true,
            message: "Todo not Created"
        })

    }
}


export const getAllTodo = async (req, res) => {
    try {
       
        const data = await todoSchema.find({})
        if (data) {
            return res.status(200).json({
                success: true,
                message: "Todo fetched successfully",
                data
            })
        }

    } catch (error) {
        return res.status(400).json({
            success: true,
            message: "Todo not fetched properly"
        })

    }
}