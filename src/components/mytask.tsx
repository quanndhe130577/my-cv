import React from 'react';

export default class MyTask extends React.Component {
    render() {
        return (
            <div>
                <h1 className="h4 font-weight-bold mt-4">E-solutions</h1>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Quản lý sản lượng điện</div>
                    <div>
                        Description: <span className="text-muted">Create Service tool for get data in realtime, Create web to show off data</span><br/>
                        Technical: <span className="text-muted">ASP.NET MVC5, HightChartJs, JQuyery, JavaScript, Bootstrap, SQL Server,...</span><br/>
                        Team Size: <span className="text-muted">4</span>
                    </div>
                </div>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Theo dõi chỉ số công tơ điện</div>
                    <div>
                        Description: <span className="text-muted">Create Application Tool for read data from electric meter</span><br/>
                        Technical: <span className="text-muted">ASP.NET MVC5, SQL Server, TCP/IP, ...</span><br/>
                        Team Size: <span className="text-muted">7</span>
                    </div>
                </div>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Theo dõi mạng lưới điện quốc gia</div>
                    <div>
                        Description: <span className="text-muted">Create Web for statistical data from most of electric Factory in Vietnam</span><br/>
                        Technical: <span className="text-muted">ASP.NET MVC5, amCharts, JQuyery, JavaScript, Bootstrap, SQL Server,...</span><br/>
                        Team Size: <span className="text-muted">10</span>
                    </div>
                </div>
                <div className="py-2 border-bottom-dashed">
                    <div className="font-weight-bold">Dự báo sản lượng điên</div>
                    <div>
                        Description: <span className="text-muted">Create serivce tool and Web for forecasting capacity for most of electric Factory in Vietnam</span><br/>
                        Technical: <span className="text-muted">ASP.NET MVC5, amCharts, JQuyery, JavaScript, Bootstrap, SQL Server, DevExpress...</span><br/>
                        Team Size: <span className="text-muted">6</span>
                    </div>
                </div>
            </div>
        )
    }
}