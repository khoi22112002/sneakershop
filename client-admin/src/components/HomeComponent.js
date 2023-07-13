import React, { Component } from 'react';
import './css/home.css';
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.css'; 

class Home extends Component {
  render() {
    return (
      
      <div className="align-center">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.css" />
          <link rel="stylesheet" type="text/css" href="fontawesome-free/css/all.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </Helmet>
	<body>
	<div id="home" class="home">
        <h1 className="text-center">ADMIN HOME</h1>
    
      <div class="row">
      <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-primary">
					<p>
						<i class="fas fa-tasks"></i>
					</p>
					<h3>100+</h3>
					<p>To do</p>
				</div>
        </div>
        <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-warning">
					<p>
						<i class="fas fa-spinner"></i>
					</p>
					<h3>100+</h3>
					<p>In progress</p>
				</div>
			</div>
      <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-success">
					<p>
						<i class="fas fa-check-circle"></i>
					</p>
					<h3>100+</h3>
					<p>Completed</p>
				</div>
			</div>
      <div class="col-3 col-m-6 col-sm-6">
				<div class="counter bg-danger">
					<p>
						<i class="fas fa-bug"></i>
					</p>
					<h3>100+</h3>
					<p>Issues</p>
				</div>
			</div>
      </div>
      
      <div class="row">
			<div class="col-8 col-m-12 col-sm-12">
				<div class="card">
					<div class="card-header">
						<h3>
							Danh sách thành viên quản trị
						</h3>
						<i class="fas fa-ellipsis-h"></i>
					</div>
					<div class="card-content">
						<table>
							<thead>
								<tr>
									<th>#</th>
									<th>Tên thành viên</th>
									<th>Vai trò</th>
									<th>Status</th>
									<th>Ngày cập nhật</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Lê Hoàng Khôi</td>
									<td>Quản lý trang ADMIN</td>
									<td>
										<span class="dot">
											<i class="bg-success"></i>
											Completed
										</span>
									</td>
									<td>12/06/2023</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Võ Hoàng Nam</td>
									<td>Quản lý trang Customer</td>
									<td>
										<span class="dot">
											<i class="bg-warning"></i>
											In progress
										</span>
									</td>
									<td>25/06/2023</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Nguyễn Nam Dương</td>
									<td>Quản lý Server</td>
									<td>
										<span class="dot">
											<i class="bg-warning"></i>
											In progress
										</span>
									</td>
									<td>03/07/2023</td>
								</tr>	
							</tbody>
						</table>
					</div>
				</div>
			</div>
      <div class="col-4 col-m-12 col-sm-12">
				<div class="card">
					<div class="card-header">
						<h3>
							Progress bar
						</h3>
						<i class="fas fa-ellipsis-h"></i>
					</div>
					<div class="card-content">
						<div class="progress-wrapper">
							<p>
								Less than 1 hour
								<span class="float-right">50%</span>
							</p>
							<div class="progress">
								<div className="bg-success" style={{ width: '50%' }}></div>
							</div>
						</div>
						<div class="progress-wrapper">
							<p>
								1 - 3 hours
								<span class="float-right">60%</span>
							</p>
							<div class="progress">
								<div className="bg-primary" style={{width:'60%'}}></div>
							</div>
						</div>
						<div class="progress-wrapper">
							<p>
								More than 3 hours
								<span class="float-right">40%</span>
							</p>
							<div class="progress">
								<div className="bg-warning" style={{width:'40%'}}></div>
							</div>
						</div>
						<div class="progress-wrapper">
							<p>
								More than 6 hours
								<span class="float-right">20%</span>
							</p>
							<div class="progress">
								<div className="bg-danger" style={{width:'20%'}}></div>
							</div>
						</div>
					</div>
				</div>
			
				<img class="image_1934436388"  width="450" height="450" src="https://img.freepik.com/premium-vector/sneaker-store-logo-template_327390-42.jpg" alt="Sneaker"></img>				
				<div class="left-align">
        <p>Chào mừng bạn đến với Sneaker Store - nơi bạn có thể tìm thấy những đôi giày sneaker tuyệt vời và phong cách. Chúng tôi tự hào được mang đến cho bạn một bộ sưu tập đa dạng với các mẫu giày từ các thương hiệu nổi tiếng trên toàn thế giới. Với sự kết hợp của đội ngũ nhân viên đam mê và tận tâm, Sneaker Store đã trở thành địa điểm lý tưởng để bạn khám phá và mua sắm những đôi giày sneaker chất lượng và độc đáo.</p>
        <p>Chúng tôi hiểu rằng giày sneaker không chỉ là một sản phẩm thời trang, mà còn là một phần của cá nhân và phong cách riêng của bạn. Vì vậy, chúng tôi luôn đặt chất lượng và sự đa dạng lên hàng đầu. Tại Sneaker Store, bạn có thể tìm thấy từ những mẫu giày sneaker cổ điển cho đến những xu hướng mới nhất, từ những thiết kế thanh lịch và tinh tế đến những phiên bản cá nhân hóa và đột phá. Chúng tôi cam kết cung cấp cho bạn những sản phẩm được làm từ chất liệu cao cấp và quy trình sản xuất tiên tiến, để bạn luôn tự tin và thoải mái khi mặc giày sneaker của chúng tôi.</p>
        <p>Đội ngũ nhân viên chuyên nghiệp và nhiệt tình của chúng tôi sẽ luôn sẵn sàng hỗ trợ bạn trong việc chọn lựa và tư vấn về phong cách. Chúng tôi hiểu rằng mỗi người có gu thẩm mỹ và phong cách riêng, và chúng tôi sẽ cùng bạn tạo nên một phong cách độc đáo và cá nhân qua từng đôi giày sneaker.</p>
		<p>Hãy đến và trải nghiệm dịch vụ chuyên nghiệp và tận tâm tại Sneaker Store. Chúng tôi cam kết bạn sẽ không chỉ tìm thấy những đôi giày sneaker chất lượng và thời thượng mà còn có trải nghiệm mua sắm tuyệt vời. Chúng tôi mong muốn được đồng hành cùng bạn trên hành trình khám phá thế giới sneaker tuyệt diệu!</p></div>	
		

	
	
	
					
			</div>
			
		</div>
		</div>
		</body>
		
	</div>
      
   
      
      
    );
  }
}
export default Home;