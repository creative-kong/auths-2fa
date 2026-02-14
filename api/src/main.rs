mod routes;

use routes::routes::app;

#[tokio::main]
async fn main() {
    let listen = tokio::net::TcpListener::bind("0.0.0.0:3001").await.unwrap();
    axum::serve(listen, app()).await.unwrap();
}
