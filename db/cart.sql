create table cart(
    num int not null auto_increment,
    id char(20) not null,
    pd_num char(20) not null,
    pd_title char(200) not null,
    pd_sub char(200) not null,
    pd_img char(100) not null,
    pd_ea int not null,
    pd_price int not null,
    pd_total_price int not null,
    regist_day char(20),
    primary key(num)
) charset=utf8;