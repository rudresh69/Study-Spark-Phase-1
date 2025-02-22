
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        body { background-color: #09122C; color: #FFFFFF; line-height: 1.6; }
        header { background-color: #872341; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.8rem; font-weight: bold; color: #FFFFFF; }
        nav ul { list-style: none; display: flex; }
        nav ul li { margin: 0 15px; }
        nav ul li a { text-decoration: none; color: #FFFFFF; padding: 5px 10px; border-radius: 5px; transition: background 0.3s; }
        nav ul li a:hover { background-color: #BE3144; }

        .hero { text-align: center; padding: 60px 20px; background-color: #BE3144; color: #FFFFFF; }
        .hero h1 { font-size: 3rem; margin-bottom: 10px; }
        .hero p { font-size: 1.2rem; }

        .content { padding: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .card { background-color: #E17564; border-radius: 10px; padding: 20px; color: #09122C; text-align: center; box-shadow: 0 4px 8px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-10px); box-shadow: 0 6px 15px rgba(0,0,0,0.2); }

        .card img { width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px; }

        .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); justify-content: center; align-items: center; }
        .modal-content { background-color: #FFFFFF; padding: 20px; border-radius: 10px; width: 300px; text-align: center; color: #09122C; }
        .close-btn { margin-top: 10px; padding: 8px 15px; background-color: #BE3144; color: #FFFFFF; border: none; border-radius: 5px; cursor: pointer; }
        .close-btn:hover { background-color: #872341; }

        footer { text-align: center; padding: 15px 0; background-color: #872341; color: #FFFFFF; margin-top: 40px; }
