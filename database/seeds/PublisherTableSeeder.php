<?php

use Illuminate\Database\Seeder;

class PublisherTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('publishers')->insert(['name' =>'Image']);
        DB::table('publishers')->insert(['name' =>'Avatar']);
        DB::table('publishers')->insert(['name' =>'Vertigo']);
    }
}
