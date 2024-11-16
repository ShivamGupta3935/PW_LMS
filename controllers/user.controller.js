import express from "express"
import apiError from "../utils/error.utils.js"

const register = (req, res) => {
    const{fullname, email, password} = req.body
    if (!fullname || !email || !password) {
        throw new apiError("all field are required", 400)
    }
}

const login = (req, res) => {

}

const logout = (req, res) => {

}

const getProfile = (req, res) => {

}

export {
    register, 
    login,
    logout,
    getProfile
}