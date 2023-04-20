import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import ReminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

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

    const removeReminder = (id: number) => {
        setReminders(reminders.filter((reminder) => reminder.id !== id));
    };

    const addReminder = async (title: string) => {
        const newReminder = await ReminderService.addReminder(title);
        setReminders([newReminder, ...reminders]);
    };

    return (
        <div className="App">
            <NewReminder onAddReminder={addReminder} />
            <ReminderList items={reminders} onRemoveReminder={removeReminder} />
        </div>
    );
}

export default App;
