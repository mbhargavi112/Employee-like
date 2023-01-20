import React, { Component } from 'react';
class Employee extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        employees: [
            {
                name: "Rammohan",
                company: "Livwell",
                designation: "Full stack developer",
            },
            {
                name: "Surendar",
                company: "Livwell",
                designation: "Android developer",
            },
            {
                name: "Sudheer",
                company: "Livwell",
                designation: "Frontened developer",
            },
            {
                name: "Aman",
                company: "Livwell",
                designation: "Backened developer",
                isLike: false
            },
        ]
    }
    likedemployees=(employees)=>{
        let filteremployees = this.state.employees.filter(el => {
            if (el == employees) {
                el.isLike = true
            }
            return el
        })
         this.setState({ employees: filteremployees })


    }
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Icon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((el, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{el.name}</td>
                                    <td>{el.company}</td>
                                    <td>{el.designation}</td>
                                    <td><i onClick={() => (this.likedemployees(el))} className={el.isLike ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"></i></td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employee;