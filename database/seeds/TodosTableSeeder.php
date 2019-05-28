<?php

use Illuminate\Database\Seeder;

class TodosTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('todos')->delete();
        
        \DB::table('todos')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'Test Todo 2',
                'body' => NULL,
                'completed' => 0,
                'created_at' => '2019-05-15 12:41:11',
                'updated_at' => '2019-05-15 12:41:17',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}