import { PublicKey } from '@solana/web3.js';
import idl from '../constant/idl.json'; 

// Program ID from Rust code
export const PROGRAM_ID = new PublicKey("7eRsZoA3sCL5UVFT3xoh5W3geqfVwe64CBfLu5MPH645");

// idl.json file 
export const IDL = idl;
