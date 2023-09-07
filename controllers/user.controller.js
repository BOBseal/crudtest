import { User } from "../models/user.model.js";


const directDelete = async(Wallet)=>{
    if(delUser){
        await User.findOneAndDelete({address: Wallet});
        res.status(200).json({msg: `User of wallet ${Wallet} deleted`})
        return true;
}}

const getUser = async(req , res)=>{
    const wallet = req.params.id;
    const userinfo = await User.findOne({address: wallet})
    
    if(!userinfo){
        res.status(200).json({msg: "No User Found By Wallet"});
        return;
    }
    res.status(200).json({userinfo});
}

const getAllUsers = async(req, res)=>{
    const allUsers = await User.find({});

    if(!allUsers){
        res.status(200).json({msg:"users list is 0"})
        return
    }
    res.status(200).json({allUsers})
}

const deleteUser = async(req , res)=>{
    const userWallet = req.params.id;
    const delUser = await User.findOne({address: userWallet});
    if(!delUser){
        res.status(200).json({msg:"No Such User found with wallet"})
        return;
    }
    const t = await directDelete(userWallet);

    if(!t){
        res.status(200).json({msg:"deletion failed"})
        return
    }
}

const addUser=async(req , res)=>{
    const {address , username} = req.query;
    let newUser;
    let Wthere;
    let Uthere;
    if(address || username){
        newUser = User({
            address: address,
            username: username
        })

        const u = await newUser.save();
        res.status(200).json(u)
        return
    }

    res.status(200).json({msg:"Add User Failed"})
}

export{getUser , addUser , getAllUsers , deleteUser}