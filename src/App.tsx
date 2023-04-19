import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "./services/reminder";

// const reminders: Reminder[] = [];

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([]);

    useEffect(() => {
        loadReminders();
    }, []);

    const loadReminders = async () => {
        const reminders = await ReminderService.getReminders();
        setReminders(reminders);
    };

    return (
        <div className="App">
            <ReminderList items={reminders} />
        </div>
    );
}

export default App;
