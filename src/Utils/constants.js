import { PublicKey } from '@solana/web3.js';
import idl from '../constant/idl.json'; 

// Program ID from Rust code
export const PROGRAM_ID = new PublicKey("5qLv4CJ4fhy5QoPTUsQhhQNJRDBNX9mv5iMyLtv16jag");

// idl.json file 
export const IDL = idl;
