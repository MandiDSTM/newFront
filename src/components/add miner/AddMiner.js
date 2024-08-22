import { useState } from "react";
import axios from "axios";

const AddMiner = () => {
    const [serial, setSerial] = useState("");
    const [pduState, setPduState] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showTable, setShowTable] = useState(false)

    const pduSubmit = async () => {
        console.log('clicked');
        try {
            const response = await axios.post('http://localhost:3000/addpdu', { serial: serial, state: pduState, person_id: phoneNumber });
            if (response.data.success) {
                alert('Data saved successfully');
                setShowTable(true)
            } else {
                alert('Invalid serial number or PDU state');
            }
        } catch (error) {
            console.error('Error saving PDU data', error);
            alert('Error saving PDU data');
        }
    }
    return (
        <div>
            <div className="flex flex-col gap-5 w-full bg-white h-[80vh] justify-center items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="self-center text-2xl mb-7">Adding Miner</h1>
                    <div className="flex w-[400px] justify-between">
                        <label htmlFor="id">Miner Serial Number</label>
                        <input className="w-25 border rounded" onChange={e => setSerial(e.target.value)} type="text" />
                    </div>
                    <div className="grid grid-cols-3 w-[400px] items-center justify-end">
                        <p>Miner State</p>
                        <div className="form-control justify-self-end">
                            <label className="label cursor-pointer justify-self-end">
                                <span className="label-text mr-2">OFF</span>
                                <input
                                    type="radio"
                                    name="radio-10"
                                    value="off"
                                    className="radio checked:bg-red-500"
                                    onChange={() => setPduState(false)}
                                    defaultChecked
                                />
                            </label>
                        </div>
                        <div className="form-control justify-self-end">
                            <label className="label cursor-pointer">
                                <span className="label-text mr-2">ON</span>
                                <input
                                    type="radio"
                                    name="radio-10"
                                    value="on"
                                    className="radio checked:bg-blue-500"
                                    onChange={() => setPduState(true)}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="flex w-[400px] justify-between">
                        <label className="mr-5" htmlFor="id">User Phone number</label>
                        <input className="w-25 border rounded mb-10" type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <button className="self-center border bg-green-700 text-white h-14 w-48 rounded-lg" onClick={pduSubmit}>Submit</button>
                </div>
                <div className={`${showTable ? 'block' : 'hidden'}`}>
                    testing
                </div>
            </div>
        </div>
    );
}

export default AddMiner;