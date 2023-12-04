import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Order } from "../pages/Order";
import { Payment } from "../pages/Payment";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="*" element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    )
}
