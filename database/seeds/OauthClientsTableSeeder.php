<?php

use Illuminate\Database\Seeder;

class OauthClientsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('oauth_clients')->delete();
        
        \DB::table('oauth_clients')->insert(array (
            0 => 
            array (
                'id' => 1,
                'user_id' => NULL,
                'name' => 'Laravel Personal Access Client',
                'secret' => 'x01ZEHAQp5TIKHebSKrq4jUeSIVA4hehqYGMNeCH',
                'redirect' => 'http://localhost',
                'personal_access_client' => 1,
                'password_client' => 0,
                'revoked' => 0,
                'created_at' => '2019-05-15 12:38:05',
                'updated_at' => '2019-05-15 12:38:05',
            ),
            1 => 
            array (
                'id' => 2,
                'user_id' => NULL,
                'name' => 'Laravel Password Grant Client',
                'secret' => '0QOVkn1f3e3xi3ZtaKxOpHJeiTJtxXMHJQ7Lfcnd',
                'redirect' => 'http://localhost',
                'personal_access_client' => 0,
                'password_client' => 1,
                'revoked' => 0,
                'created_at' => '2019-05-15 12:38:06',
                'updated_at' => '2019-05-15 12:38:06',
            ),
        ));
        
        
    }
}