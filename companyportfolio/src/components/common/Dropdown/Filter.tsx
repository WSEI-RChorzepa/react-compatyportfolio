import React, { useState, useEffect } from 'react';

export interface DropdownFilterProps {
    state: string;
    setState(): void;
}

// const DropdownFilter: React.FunctionComponent<DropdownFilterProps>({state, setState}) => {

//     const [value, setValue] = useState("");
//     const filter = (value: string) => {
//       setState(state.filter((option: string) => option.includes(value)));
//     };

//     const handleOnChange = (event: { target: HTMLInputElement }) => {
//       setValue(event.target.value);

//     };

//     useEffect(() => {
//       filter(value);
//     }, [value]);

//     return (
//         <div></div>
//       );
//   }

// const DropdownFilter: React.FunctionComponent<DropdownFilterProps> = ({state, setState}) =>{
//     const [value, setValue] = useState("");

//     const filter = (value: string) => {
//         const value = state.filter((option: string) => option.includes(value))
//       setState();
//     };

//     return (
//         <div></div>
//     )
// }
