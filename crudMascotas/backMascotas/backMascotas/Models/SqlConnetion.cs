using System;
using System.Data.SqlClient;

namespace backMascotas.Models
{
    internal class SqlConnetion
    {
        private string strConn;

        public SqlConnetion(string strConn)
        {
            this.strConn = strConn;
        }

        public static implicit operator SqlConnection(SqlConnetion v)
        {
            throw new NotImplementedException();
        }
    }
}