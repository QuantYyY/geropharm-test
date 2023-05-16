using Microsoft.AspNetCore.Mvc;
using System.Data;
using Npgsql;

namespace TypescriptReact.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : Controller
    {
        private readonly IConfiguration _configuration;

        public PostsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get(int limit, int offset)
        {

            string query = string.Empty;

            if (limit == 0 && offset == 0)
            {
                query = @"
                SELECT id AS ""id"",
                    title AS ""title"",
                    post AS ""post"",
                    author AS ""author""
                FROM posts;
            ";
            }
            else
            {
                query = @"
                SELECT id AS ""id"",
                    title AS ""title"",
                    post AS ""post"",
                    author AS ""author""
                FROM posts
                ORDER BY id
                LIMIT @limit OFFSET @offset;
            ";
            }


            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("geropharmdb");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@limit", limit);
                    myCommand.Parameters.AddWithValue("@offset", offset);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(Models.Posts posts)
        {
            string query = @"
                INSERT INTO posts (title, post, author) 
                VALUES (@title, @post, @author);
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("geropharmdb");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@title", posts.title);
                    myCommand.Parameters.AddWithValue("@post", posts.post);
                    myCommand.Parameters.AddWithValue("@author", posts.author);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Models.Posts posts)
        {
            string query = @"
                update posts set 
                    title = @title,
                    post = @post,
                    author = @author
                where id = @id
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("geropharmdb");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", posts.id);
                    myCommand.Parameters.AddWithValue("@post", posts.post);
                    myCommand.Parameters.AddWithValue("@author", posts.author);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from posts
                where id = @id
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("geropharmdb");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}