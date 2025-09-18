import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import AllTickets from "./pages/AllTickets"
import TicketDetail from "./pages/TicketDetail"
import CreateTicket from "./pages/CreateTicket"
import AddUser from "./pages/AddUser"
import UserManagement from "./pages/UserManagement"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tickets" element={<AllTickets />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </Layout>
  )
}

export default App
