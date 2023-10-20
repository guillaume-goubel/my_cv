<?php

namespace App\Controller;

use App\Repository\InterestRepository;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', methods: ['GET'])]
    public function index(
        Request $request, 
        ProjectRepository $projectRepository,
        InterestRepository $interestRepository
        ): Response
    {
        $uri = $request->getRequestUri();
        if (empty($uri) || $uri === '/') {
            $locale = $request->getLocale();
            $url = $this->generateUrl('app_home', ['_locale' => $locale]);
            return $this->redirect($url);
        }

        // list of projects
        $projects = $projectRepository->findAll();

        // list of interests
        $interests = $interestRepository->findBy([], ['ordering' => 'ASC']);
          
        return $this->render('home/index.html.twig', [
            'projects' => $projects,
            'interests' => $interests,
        ]);
    }

}
