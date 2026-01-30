import { Routes, Route } from "react-router-dom"
import CommonLayout from "./components/commonLayouts/CommonLayout"
import DashBoardPage from "./pages/DashBoardPage"
import CallLogHistoryPage from "./pages/CallLogHistoryPage"
import AppointmentsPage from "./pages/AppointmentsPage"
import SettingsPage from "./pages/SettingsPage"
import EditProfilePage from "./pages/EditProfilePage"
import SettingsLayout from "./components/commonLayouts/SettingsLayout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />} >
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/call-log" element={<CallLogHistoryPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/settings" element={<SettingsLayout />} >
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/profile" element={<EditProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App