import axios from 'axios';
import { useState } from "react";
import useAuth from '../hooks/useAuth';
import '../layout/styles.css';

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [language, setLanguage] = useState('THAI');

  const handleChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8888/auth/login', {
        email: input.email,
        password: input.password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      const userResponse = await axios.get('http://localhost:8888/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(userResponse.data);
      if (userResponse.data.role === 'ADMIN') {
        // Redirect to admin dashboard if user is an admin
        window.location = '/header';
      } else {
        // Redirect to user header page if user is not an admin
        window.location = '/header'; // หรือ URL ของหน้า UserHeader อื่นๆ ที่ต้องการ
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  

  return (
    <div className="background-container ">
      <div className="border1 ">
        <div className="text1">เข้าสู่ระบบ</div>
        <form className="form1" onSubmit={handleSubmit}>
          <label className="label1">
            <div className="label">
              <span className="label-text">อีเมล :</span>
            </div>
            <input
              type="text"
              className="input1"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </label>

          <label className="label2">
            <div className="label">
              <span className="label-text">รหัสผ่าน :</span>
            </div>
            <input
              type="password"
              className="input2"
              name="password"
              value={input.password}
              onChange={handleChange}
            /> 
          </label>

          <div className="button1">
            <button type="submit" className="">เข้าสู่ระบบ</button>
          </div>
          <div className="header-link">
            <a href="/">กลับไปที่หน้าหลัก</a>
          </div>
        </form>
      </div>
    </div>
  );
}
