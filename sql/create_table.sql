use auths;

create table users (
	user_id int primary key identity(1,1),
	first_name nvarchar(50) not null,
	last_name nvarchar(50) not null,
	email nvarchar(30) not null,
	password nvarchar(max) not null,
	is_email_verified bit default 0,
	created_at datetime default getdate(),
	updated_at datetime
)

create table preferences (
	preferences_id int primary key identity(1,1),
	user_id int not null,
	email_notification bit default 1,
	two_factor_secret nvarchar(255),
	created_at datetime default getdate(),
	updated_at datetime,
	constraint fk_preferrences_user foreign key (user_id) references users(user_id)
)

create table sessions (
	sessions_id int primary key identity(1,1),
	user_id int not null,
	user_agent nvarchar(30),
	expired_at datetime,
	created_at datetime default getdate(),
	constraint fk_sessions_user foreign key (user_id) references users(user_id)
)

create table verifications (
	verifications_id int primary key identity(1,1),
	user_id int not null,
	code nvarchar(50) not null,
	type nvarchar(50) not null,
	created_at datetime default getdate(),
	expires_at datetime not null,
	constraint fk_verifications_user foreign key (user_id) references users(user_id)
)