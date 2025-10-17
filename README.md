# Docker Tests Practice

This project demonstrates how to use Docker Compose to set up a PostgreSQL database with pgAdmin for database management.

## Prerequisites

- Docker Desktop installed and running
- Docker Compose (included with Docker Desktop)

## Services

This setup includes two services:

1. **PostgreSQL Database (`db`)**
   - Image: `postgres`
   - Container name: `postgres_db_compose_service`
   - Database: `pdb_compose_test`
   - Username: `admin`
   - Password: `123456`
   - Data persistence: Uses named volume `pgdata`

2. **pgAdmin (`pgAdmin`)**
   - Image: `dpage/pgadmin4`
   - Container name: `pgadmin_compose_service`
   - Web interface port: `8080`
   - Login email: `myexampleid@gmail.com`
   - Login password: `123456`

## Usage

### Starting the Services

To start both PostgreSQL and pgAdmin:

```bash
docker compose up
```

To run in detached mode (background):

```bash
docker compose up -d
```

### Accessing pgAdmin

1. Open your web browser
2. Navigate to: `http://localhost:8080`
3. Login with:
   - Email: `myexampleid@gmail.com`
   - Password: `123456`

### Connecting to PostgreSQL from pgAdmin

After logging into pgAdmin:

1. Right-click on "Servers" in the left panel
2. Select "Create" > "Server"
3. In the "General" tab:
   - Name: `Docker PostgreSQL` (or any name you prefer)
4. In the "Connection" tab:
   - Host name/address: `db` (the service name from docker-compose.yml)
   - Port: `5432`
   - Maintenance database: `pdb_compose_test`
   - Username: `admin`
   - Password: `123456`
5. Click "Save"

### Stopping the Services

To stop all services:

```bash
docker compose down
```

To stop and remove volumes (⚠️ **This will delete all database data**):

```bash
docker compose down -v
```

### Viewing Logs

To see logs from all services:

```bash
docker compose logs
```

To see logs from a specific service:

```bash
docker compose logs db
docker compose logs pgAdmin
```

To follow logs in real-time:

```bash
docker compose logs -f
```

### Useful Commands

- Check running containers: `docker compose ps`
- Restart services: `docker compose restart`
- Pull latest images: `docker compose pull`
- Rebuild services: `docker compose up --build`

## Data Persistence

The PostgreSQL data is stored in a Docker named volume called `pgdata`. This means your database data will persist even when you stop and restart the containers.

## Notes

- The database is only accessible from within the Docker network by default
- If you need to connect to PostgreSQL from outside Docker, add a `ports` section to the `db` service in `docker-compose.yml`
- Make sure ports 8080 (pgAdmin) are not being used by other applications on your system